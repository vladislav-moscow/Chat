import Chat from "@/components/chat/Chat";
import Detail from "@/components/detail/Detail";
import List from "@/components/list/List";


export default function Home() {
  return (
    <h1 className="continer">
			<List/>
			<Chat/>
			<Detail/>
		</h1>
  );
}
