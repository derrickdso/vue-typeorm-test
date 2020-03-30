<template>
    <div class="details">
        <div class="username">User: {{ nameUpperCase }}</div>
        <input :value="name" @keydown="updateName($event.target.value)" />
    </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const user = namespace('user');

@Component
export default class User extends Vue {

    @user.State
    public name!: string;

    @user.Getter
    public nameUpperCase!: string;

    @user.Action
    public updateName!: (newName: string) => void;

    // Computed

    get fullName(): string {
        return this.name + ' wow';
    }

    // Methods

    public clickMe(): void {
        console.log('clicked');
        console.log(this.addNum(4, 2));
    }
    public addNum(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Hooks

    public mounted() {
        // do something
    }

    public beforeUpdate() {
        // do something
    }
}
</script>