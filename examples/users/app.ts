import {UserCard} from "./UserCard";

export function App(_, {liba}: any) {
    const [users, setUsers] = liba.useState([{id: 1, name:'Nikita'}, {id: 2, name:'Vladislav'}]);

    const [count, setCount] = liba.useState(0)


    return liba.create('div', { //<div>
        children: [
            'hello world',
            liba.create('button', {
                children: [count],
                onClick: () => {
                    setCount((prev: number) => prev + 1)
                }
            }),
            liba.create('section', {
                children: [  liba.create('button', {
                    children: ['Удалить пользователей']
                })]
            }),
            liba.create("div", {children:  users.map(u => liba.create(UserCard, {user: u}))}),
            liba.create('button', {
                children: ['Add new user'],
                onClick: () => {
                    setUsers([...users, {id: Date.now(), name: 'name new'}])
                }
            }),
        ]
    });


}

