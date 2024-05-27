import CategoryHeader from "./CategoryHeader"
import "./category.css"

const Category = ({handlerSideClose}) => {
  return (
    <article className="category-page" onClick={handlerSideClose}>
    <div className="col-md-12 main-about">
      <h2>Kateqoriya</h2>
    </div>
    <div className="category-header">
        <CategoryHeader/>
    </div>
   
  </article>
  )
}

export default Category