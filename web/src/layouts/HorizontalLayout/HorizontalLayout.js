const HorizontalLayout = ({ children }) => {
  return <>
        <div className="text-white w-full p-6">
          <li className="hover:cursor-pointer">zone 1</li> | <li to="zone2" className="hover:cursor-pointer">zone 2</li> | <a href="#zone3">zone 3</a> | <a href="#zone4">zone 4</a>
        </div>
        <div class="snap-x flex w-48">
              <div class="snap-center w-96">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center w-96">
                <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center w-96">
                <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center w-96">
                <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center w-96">
                <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center w-96">
                <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
            </div>
        <div className="snap-x flex overflow-hidden w-max">
          <div id="zone1" className="w-screen snap-start">
          </div>
          <div id="zone2" className="w-screen snap-start">SECTION 2</div>
          <div id="zone3" className="w-screen snap-start">SECTION 3</div>
          <div id="zone4" className="w-screen snap-start">{children}</div>
        </div>
    </>
  }


export default HorizontalLayout
