const ProjectLoading = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="h-52 p-3 overflow-hidden bg-white bg-opacity-5 animate-pulse"></div>
      <div className="p-3 bg-lime-600 bg-opacity-10 animate-pulse">
        <div className="grid grid-cols-3 gap-2 mt-2 ">
          <div className="h-3 bg-white bg-opacity-5 rounded animate-pulse"></div>
          <div className="h-3 bg-white bg-opacity-5 rounded animate-pulse"></div>
          <div className="h-3 bg-white bg-opacity-5 rounded animate-pulse"></div>
          <div className="h-3 col-span-2 bg-white bg-opacity-5 rounded animate-pulse"></div>
          <div className="h-3 bg-white bg-opacity-5 rounded  animate-pulse"></div>
          <div className="..."></div>
          <div className="col-span-2 ..."></div>
        </div>
      </div>
    </div>
  )
}
export default ProjectLoading
