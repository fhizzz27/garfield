// app/page.tsx
import CheckFootprint from "./components/CheckFootprint";
import NavigationBar from "./components/NavigationBar";
import TabContainer from "./components/TabContainer";
import { TabProvider } from "./contexts/TabContext";

/**
 * This project was developed by Nikandr Surkov.
 *
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

export default function Home() {
  return (
    <TabProvider>
      <main className="min-h-screen bg-[#ffa500] text-[#222]">
        <CheckFootprint />
        <TabContainer />
        <NavigationBar />
      </main>
    </TabProvider>
  );
}
