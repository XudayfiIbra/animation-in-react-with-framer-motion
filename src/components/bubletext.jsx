import './bubble.css'

const BubbleText = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white">
        <Text />
      </div>
    </>
  );
};

const Text = () => {
  return (
    <>
      <h2 className="text-center text-5xl font-thin text-blue-900">
        {"hudayfi".split("").map((child, idx) => {
            <span className="hoverText" key={idx}>
                {child}
            </span>
        })}
      </h2>
    </>
  );
};

export default BubbleText;
