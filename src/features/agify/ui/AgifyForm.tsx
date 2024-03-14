import { useForm } from "react-hook-form"
import { useAgifyQuery } from "../state/agify.query"
import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "../../../shared/debouncer";

type FormData = {
  firstName: string
}

export function AgifyForm() {
  const [name, setName] = useState("")
  const { data } = useAgifyQuery(name)
  const {
    register,
    handleSubmit,
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => setName(data.firstName))

  const setNameDebounced = useCallback(debounce(setName, 3000), [setName])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNameDebounced(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>First name </label>
      <input {...register("firstName", { onChange: handleChange })} />
      <button
        type="submit"
      >
        Submit
      </button>
      <div>
        Your age {data?.age}
      </div>
    </form>
  )
}