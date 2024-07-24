export const Card = () => {
  return (
    <div className="p-5 rounded-md shadow-2xl bg-white space-y-3">
        <div className="flex items-center gap-3">
            <img src="./assets/img-01.jpg" alt="logo" className="w-16 h-16  rounded-full"/>
       <div>
        <h3 className="text-lg text-orange-500 font-medium">Power Gen</h3>
        <p className="text-sm text-gray-500">Power Gen</p>
        </div>
        </div>
        <div className="pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras a ornare odio. Nulla rutrum ornare nunc in venenatis. 
            Donec ac est sit amet turpis semper euismod. Donec tincidunt mi eget
            fringilla porttitor.
        </div>
    </div>
  )
}
