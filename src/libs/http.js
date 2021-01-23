class Http {
    static instance = new Http();

    get= async (url) => {
        try{
            let req = await fetch();

            let json = await req.json();

            return json;
        }catch(err){
            console.log("http get method error", err);

            throw Error(err);
        }
    }

    post = async (url, body) => {
        try{
            let req = await fetch(url, {

                method:"POST",
                body
            });

            let json = await req.json();

            return json;
        }catch(err){
            console.log("http method post error", err);

            throw Error(err);
        }

    }

    remove = async (url) => {
        try {
          const request = await fetch(url, {
            method: 'DELETE',
          });

          const json = await request.json();

          return json;
        } catch (err) {
          console.error("http method delete error", err);
          
          throw Error(err);
        }
      };
    
      put = async (url, body) => {
        try {
          const request = await fetch(url, {
            method: 'PUT',
            body,
          });

          const json = await request.json();

          return json;
        } catch (err) {
          console.error("http method put error", err);
          
          throw Error(err);
        }
      };
}

export default Http;