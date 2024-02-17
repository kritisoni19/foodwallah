import "../App.css";
import { useForm } from "react-hook-form";
import NormalForm from "./NormalForm";

let renderCount = 0

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  renderCount += 1

  return (
    <>
      <div className="container mt-8rem">
        <div className="row mb-5">
          <div className="col-md-6 col-sm-12 mx-auto">
            <h2 className="text-center">Registration Form</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          Render Count -- {renderCount}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  name="message"
                  className="form-control"
                  {...register("message", { required: "name Required" })}
                />
                {errors.message && errors.message.message}
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  name="emailmessage"
                  className="form-control"
                  {...register("emailmessage", { required: true })}
                />
                {errors.emailmessage && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <label>Select Gender</label>
              <select {...register("gender")} className="form-control">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
                </select>
              </div>
              <input
                type="submit"
                className="form-group btn btn-primary mt-3"
              />
            </form>
          </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <NormalForm/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
