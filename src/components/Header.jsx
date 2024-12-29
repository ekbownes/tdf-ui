import toothfairy from "../../public/toothfairy.png";
export function Header() {
  return (
    <div id="header">
      <h1> Welcome to Tooth Fairy Dispatch</h1>
      <img src={toothfairy} />
    </div>
  );
}
