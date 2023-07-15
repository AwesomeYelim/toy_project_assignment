import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Login Form</label>
        </div>
        <div>
          <input
            type="text"
            {...register("id", {
              required: "값 입력 바람",
            })}
          />
          {errors.id && <span>{errors.id.message as string}</span>}
        </div>
        <div>
          <input
            type="password"
            {...register("password", {
              required: "값 입력 바람",
            })}
          />
          {errors.password && <span>{errors.password.message as string}</span>}
        </div>
        <div>
          <input
            type="password"
            {...register("cfpassword", {
              required: "값 입력 바람",
              validate : {
                check : (val) => {
                  if(getValues('password') !== val){
                    return '비번 잘못됨'
                  }
                }
              }
            })}
          />
          {errors.cfpassword && <span>{errors.cfpassword.message as string}</span>}
        </div>
        <div>
          <button type='submit'>들어갈예정</button>
        </div>
      </form>
    </>
  );
}

export default App;
