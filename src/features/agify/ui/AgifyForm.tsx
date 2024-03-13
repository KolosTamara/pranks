import { useForm } from "react-hook-form"
import { useAgifyQuery } from "../state/agify.query"

type FormData = {
  firstName: string
}

export function AgifyForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const watchFirstName = watch("firstName")
  const onSubmit = handleSubmit((data) => console.log(data))

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
    </form>
  )
}