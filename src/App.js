import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  const data = {
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "Javascript library",
    user: {
      firstname: "Jack",
      lastname: "Light",
    },
    techskill: ["HTML", "js", "CSS", "React"],
    date: new Date(),
  };
  const greetPeople = () => {
    alert("Welcome to me corner");
  };
  const showDate = () => {
    let date = new Date();
    // date.getDate()
    alert(date);
  };

  return (
    <div className="container">
      <Header
        welcome={data.welcome}
        title={data.title}
        subtitle={data.subtitle}
      />
      <Main
        user={data.user}
        techs={data.techskill}
        greetPeople={greetPeople}
        showDate={showDate}
      />
      <Footer date={data.date} />
    </div>
  );
}

export default App;
