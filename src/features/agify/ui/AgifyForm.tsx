import { useForm } from "react-hook-form"
import { useAgifyQuery } from "../state/agify.query"
import { IAgify } from "../model/agify.model";
import { useState } from "react";

type FormData = {
  firstName: string
}

export function AgifyForm() {
  const [name, setName] = useState("")
  const { data } = useAgifyQuery(name)
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const watchFirstName = watch("firstName")
  const onSubmit = handleSubmit((data) => setName(data.firstName))

  return (
    <form onSubmit={onSubmit}>
      <label>First name </label>
      <input {...register("firstName")} />
      {watchFirstName && (
        <div> HELLO </div>
      )}
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