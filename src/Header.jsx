function Header(headerInfo,cname,children){
  // let {headerInfo}=props;
  // console.log(props)
  return(
    <div>
      <h3>Header part</h3>
      {children}
      <h1> {headerInfo.email} {cname}</h1>


</div>
  )
}

export default Header;
