import CircleBig from './CircleBig';
import CircleSmall from './CircleSmall';

const Container = (props) => {
  return (
    <div className="relative w-4/5 md:w-3/5 lg:w-2/5">
      <CircleSmall />
      <CircleBig />
      {props.children}
    </div>
  );
};

export default Container;
