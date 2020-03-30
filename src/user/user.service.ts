import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}


    async findOne(id): Promise<User> {
        return await this.userRepository.findOne(id)
    }

    async delete(id) {
        return await this.userRepository.delete({ id })
    }

    async create() {
        const user = await this.userRepository.create()
        user.ins_datetime = new Date()
        return await this.userRepository.save(user)
    }

    async save(object) {
        const user = await this.userRepository.findOne(object.id)
        // automator.upd_uname = username;
        user.name = object.name;
        return this.userRepository.save(user);
    }

}