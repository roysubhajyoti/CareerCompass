export const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" name="name" placeholder="name" className="" />
        <input
          type="password"
          name="password"
          placeholder="password"
          className=""
        />
        <label>
          <input type="checkbox" name="rememberMe" /> Remember me?
        </label>
        <button type="submit" className="">
          Submit
        </button>{" "}
      </form>
    </div>
  );
};
