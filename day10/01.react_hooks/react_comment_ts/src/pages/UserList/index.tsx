function UserList() {
  return <h1>Loading...</h1>;

  // return (
  //   <div className="row">
  //     {users.map((user) => {
  //       return (
  //         <div className="card" key={user.id}>
  //           <a href={user.html_url} target="_blank" rel="noreferrer">
  //             <img
  //               src={user.avatar_url}
  //               style={{ width: "100%" }}
  //               alt={user.login}
  //             />
  //           </a>
  //           <p className="card-text">{user.login}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  // return <h1>Enter Name To Search</h1>;
}

export default UserList;
