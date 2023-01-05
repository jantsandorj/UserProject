import Button from "./button";

const Tech = ({ techs }) => {
  return (
    <ul>
      {techs.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
};
const UserCard = ({ img, firstname, lastname }) => {
  return (
    <div>
      <img src={img} alt="user" />
      <div className="d-flex gap-3">
        <h4>{firstname}</h4>
        <h4>{lastname}</h4>
      </div>
    </div>
  );
};

export default function main({ user, techs, greetPeople, showDate }) {
  const UserInfo = {
    ...user,
    img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=300",
  };
  let imgAv = "https://www.w3schools.com/howto/img_avatar.png";
  const users = [
    { img: imgAv, firstname: "person1", lastname: "lastname1" },
    { img: imgAv, firstname: "person2", lastname: "lastname2" },
    { img: imgAv, firstname: "person3", lastname: "lastname3" },
    { img: imgAv, firstname: "person4", lastname: "lastname4" },
  ];
  return (
    <div>
      <p>Tech stack</p>
      <Tech techs={techs} />
      <UserCard {...UserInfo} />
      {users.map((UserInfo) => {
        return <UserCard {...UserInfo} />;
      })}
      <Button text="Greet People" status={true} func={greetPeople} />
      <Button text="Show Date" status={false} func={showDate} />
    </div>
  );
}
