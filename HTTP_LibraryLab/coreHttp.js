class CoreHttp {

    async Get(url) {
        const opt = {
            method: "GET",
            headers: {
                'Content-Type': 'appication/json',
            }
        }
        try {
            const response = await fetch(url, opt);
            if(!response.ok) {
                throw new Error(`GET Error: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async Post(url, data) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error(`POST Error: ${response.status}`);
          }
          const responseData = await response.json();
          return responseData;
        } catch (error) {
          throw new Error(error);
        }
      }

      async Put(url, data) {
        console.log(data);
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error(`PUT Error: ${response.status}`);
          }
          const responseData = await response.json();
          return responseData;
        } catch (error) {
          throw new Error(error);
        }
      }

      async delete(url) {
        console.log('deleted');
        try {
          const response = await fetch(url, {
            method: 'DELETE',
          });
          if (!response.ok) {
            throw new Error(`DELETE Error: ${response.status}`);
          }
          return 'User Deleted';
        } catch (error) {
          throw new Error(error);
        }
      }
}
