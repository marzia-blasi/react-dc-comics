export default function Card(props) {
  console.log(props);

  const { id, title, thumb } = props;

  return (
    <div className="comics col-12 col-sm-6 col-lg-3" key={id}>
      <div className="cardm">
        <div>
          <img src={thumb} alt={title} />
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
