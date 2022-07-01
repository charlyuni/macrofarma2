function Start({start}) {


return (
    <div className="rating rating-hidden	">
   {(1 === Math.ceil(start))  ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 disabled" checked={true} onChange={()=>{}} /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " checked={false} onChange={()=>{}} />}
   {(2 === Math.ceil(start))  ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 disabled" checked={true} onChange={()=>{}} /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " checked={false} onChange={()=>{}}/>}
   {(3 === Math.ceil(start))  ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 disabled" checked={true} onChange={()=>{}} /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " checked={false} onChange={()=>{}} />}
   {(4 === Math.ceil(start)) ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 disabled" checked={true} onChange={()=>{}} /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " checked={false} onChange={()=>{}} />}
   {(5 === Math.ceil(start))  ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 disabled" checked={true} onChange={()=>{}} /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={false} onChange={()=>{}} />}

    </div>
  )
}
export default Start