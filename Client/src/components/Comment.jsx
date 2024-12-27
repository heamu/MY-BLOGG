import Image from "./Image";
function Comment() {
    return (  
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
                <span font-medium>John Doe</span>
                <span className="text-sm text-gray-500">2 days</span>
            </div>
            <div className="mt-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit id consequatur adipisci, molestias recusandae rerum, at alias saepe sunt accusamus aperiam quos quas</p>
            </div>
        </div>
    );
}

export default Comment;