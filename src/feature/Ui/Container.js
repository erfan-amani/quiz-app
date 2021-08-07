import CircleBig from './CircleBig';
import CircleSmall from './CircleSmall';

const Container = (props) => {
  return (
    <div className="relative min-w-4/5 md:min-w-3/5 lg:min-w-2/5">
      <CircleSmall />
      <CircleBig />
      {props.children}
    </div>
  );
};

export default Container;
