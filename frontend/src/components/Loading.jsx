import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className="loading">
      <ReactLoading type={"spin"} color={"#fff"} height={100} width={100} />
    </div>
  )
}

export default Loading;

