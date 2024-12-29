const Card = ({ children, headerSlot, className }) => {
  return <div className={`${className || ''} card border dark:border-gray-700 rounded-xl lg:p-6 p-4`}>
    <>{headerSlot}</>
    <section>
        {children}
    </section>
  </div>
}
export default Card

// hexo card.js : 

// const Card = ({ children, headerSlot, className }) => {
//   return <div className={className}>
//     <>{headerSlot}</>
//     <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100">
//         {children}
//     </section>
//   </div>
// }
// export default Card
