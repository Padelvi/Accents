const Accent = (props) => {
  const copy = () => {
    navigator.clipboard.writeText(props.letter).then(() => {
      props.set(props.letter);
    });
  };
  return (
    <div className="accent m-4 w-1/4 inline">
      <button onClick={copy} className="w-12">
        <p className="inline text-lg p-4 border-3 border-solid border-red-800 bg-yellow-400">
          {props.letter}
        </p>
      </button>
    </div>
  );
};

export default Accent;
