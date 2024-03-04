export const Login =()=>{
    return (
        <div className="container" >
            <form>
                <input type="text" name="name" placeholder="name" className=""></input>
                <input type="password" name="name" placeholder="password" className=""></input>
                <label><input type="checkbox">Remember me?</input></label>
                <button type="submit" className=""></button>

            </form>
        </div>
    );
};
