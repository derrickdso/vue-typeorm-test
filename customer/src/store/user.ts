import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'user' })
class User extends VuexModule {

    public name: string = 'tester';
    @Mutation
    public setName(newName: string): void {
        this.name = newName;
    }
    @Action
    public updateName(newName: string): void {
        this.context.commit('setName', newName);
    }
}
export default User;

// async getUser(userId) {
//     let res = await axios.get("http://localhost:8000/user/" + userId);
//     return res.data;
// }