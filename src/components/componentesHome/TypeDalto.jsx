import '../../stylesheets/styleCard-home/typeDalto.css'
export default function TypeDalto(props) {
  return (
    <div className="box-typeDalto">
        <h1 className="title-typeDalto">{props.titleDalto}</h1>
        <img src={props.imgDalto} />
        <button>Ver mas</button>
    </div>
  )
}
