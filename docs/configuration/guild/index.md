# Guild

| Parameter               | Default            | Command                                  | Description                                                                                            | Type       |
| ----------------------- | ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| \_id                    | auto               | :x:                                      | Unique identifier in database                                                                          | Identifier |
| guildId                 | guild.id           | :x:                                      | Unique identifier of Guild                                                                             | Snowflake  |
| credits.status          | :white_check_mark: | `/settings guild credits status`         | Toggle status of credits                                                                               | Boolean    |
| credits.rate            | 1                  | `/settings guild credits rate`           | How much credits members should get for sending messages                                               | Number     |
| credits.minimumLength   | 5                  | `/settings guild credits minimum-length` | Minimum length of a message to be granted credits for sending the message                              | Number     |
| credits.timeout         | 5000               | `/settings guild credits timeout`        | How long members need to wait between earning credits for sending messages, specified in milliseconds  | Number     |
| credits.workRate        | 1                  | `/settings guild credits work-rate`      | Maximum amount of credits a member can earn when using command `/credits work`                         | Number     |
| credits.workTimeout     | 900000             | `/settings guild credits work-timeout`   | How long members need to wait between working using command `/credits work`, specified in milliseconds | Number     |
| shop.roles.status       | :white_check_mark: | :x:                                      | Toggle status of shop roles                                                                            | Boolean    |
| shop.roles.pricePerHour | 5                  | :x:                                      | How much members are charged for custom roles per hour                                                 | Number     |
| points.status           | :x:                | `/settings guild points status`          | Toggle status of points                                                                                | Boolean    |
| points.rate             | 1                  | `/settings guild points rate`            | How much points members should get for sending message                                                 | Number     |
| points.minimumLength    | 5                  | `/settings guild points minimum-length`  | Minimum length of a message to be granted points for sending the message                               | Number     |
| points.timeout          | 5000               | `/settings guild points timeout`         | How long members need to wait between earning points for sending messages, specified in milliseconds   | Number     |
| createdAt               | new Date()         | :x:                                      | When guild was added to database                                                                       | Date       |
| updatedAt               | new Date()         | :x:                                      | Last time guild was updated in the database                                                            | Date       |
