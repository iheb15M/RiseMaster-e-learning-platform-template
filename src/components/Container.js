function Container({ children, outerClassName = '', innerClassName = '' }) {
    return (
      <div className={`w-screen flex items-center justify-center ${outerClassName}`}>
        <div className={`w-11/12 lg:w-10/12 h-full ${innerClassName}`}>
          {children}
        </div>
      </div>
    );
  }
  
  export default Container;
  