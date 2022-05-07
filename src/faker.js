import faker from '@faker-js/faker'

export function GenerateMessage(count = 1) {
    const message = [];
    do {
        message.push({
            id: faker.datatype.uuid(),
            type: faker.datatype.boolean() ? 'recive' : 'sent',
            message: faker.lorem.sentence(),
            time: faker.date.recent().toLocaleTimeString()
        })
        count--;
    } while (count);

    return message;
}