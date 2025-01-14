type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
      id: string;
      name: string;
      price: string | undefined;
    };
  };
  type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
      id: string;
      name: string;
      price: string | undefined;
    }[];
  };
  
  const input: UserWithGadget[] = [
    {
      id: "1",
      name: "Khalid Kashmiri",
      gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
      id: "2",
      name: "Khidir Karawita",
      gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
      id: "1",
      name: "Khalid Kashmiri",
      gadget: { id: "103", name: "Laptop", price: "1500" },
    },
  ];
  
  function agregateUsers(users: UserWithGadget[]): UserWithGadgets[] {
    const userMap = new Map<string, UserWithGadgets>();
  
    users.forEach(({ id, name, gadget }) => {
      if (userMap.has(id)) {
        const user = userMap.get(id)!;
        user.gadgets.push(gadget);
      } else {
        userMap.set(id, {
          id,
          name,
          gadgets: [gadget],
        });
      }
    });
    return Array.from(userMap.values());
  }
  console.log(agregateUsers(input));
  