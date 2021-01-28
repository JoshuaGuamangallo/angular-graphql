import User from '../../models/user';
const Query = {
    getUsers: async () => {
        return await User.find();
    },
    getUser: async (_, { id }) => {
        return await User.findById(id);
    }
}

export default Query;