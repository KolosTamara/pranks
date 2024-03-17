import { useForm } from "react-hook-form"
import { useAgifyQuery } from "../state/agify.query"
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { debounce } from "../../../shared/debouncer";
import { Button, Div, FormItem, Input } from "@vkontakte/vkui";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().matches(/^[A-Za-z]+$/, 'Only letters').required('Required'),
});

type FormData = {
  firstName: string,
};

export function AgifyForm() {
  const [name, setName] = useState<string>("");
  const { data, isLoading } = useAgifyQuery(name);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const isError = !!errors.firstName;

  const setNameDebounced = useCallback(debounce(setName, 3000), [setName]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!isError) {
      setNameDebounced(event.target.value);
    }
  }, [setNameDebounced, isError]);

  const { ref, ...firstNameRegister } = useMemo(() => register("firstName", {
    onChange: handleChange,
  }), [handleChange]);

  const onSubmit = handleSubmit((data) => setName(data.firstName));

  return (
    <form onSubmit={onSubmit}>
      <FormItem top="First name" >
        <Input status={isError ? 'error' : 'default'} getRootRef={ref} {...firstNameRegister} />
      </FormItem>
      <Div>
        Your age: {isLoading ? 'Loading...' : data?.age}
      </Div>
      <Div>
        <Button
          disabled={isError}
          type="submit"
        >
          Submit
        </Button>
      </Div>
    </form>
  );
}
