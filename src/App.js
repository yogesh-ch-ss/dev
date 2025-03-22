import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="flex flex-col max-w-screen-lg w-full min-h-screen mx-auto bg-slate-300">
            {/* <h3>This will be our navbar.</h3> */}
            <Navbar />

            <div className="flex-grow p-8">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <p>This is a test sentence.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    recusandae consequuntur vitae quaerat rerum nisi modi
                    deleniti temporibus, reiciendis quas nesciunt ab itaque a
                    atque assumenda tempore consectetur sit vel, obcaecati
                    culpa. Accusamus modi dolor enim veritatis molestias.
                    Voluptas sed quidem suscipit molestiae cum unde ipsum
                    accusantium, exercitationem itaque ipsa?
                </p>
            </div>

            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
