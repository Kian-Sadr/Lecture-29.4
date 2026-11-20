const root = ReactDOM.createRoot(document.getElementById("root"));

//Add content here
function FunctionComponent(){
   return <h1>Hello!</h1>
};

class ClassComponent extends React.Component {
   render(){
      <h2>This is the Second Part</h2>;
   }
}

let page = <>
   <FunctionComponent/>
   <ClassComponent/>
</>;

root.render(page);
