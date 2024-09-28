import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute((c) => {
  return c.render(
    <div>
      <h1 className='text-xl text-red-400'>Hello!</h1>
      <h2>HI!</h2>
      <Counter />
    </div>
  );
});
