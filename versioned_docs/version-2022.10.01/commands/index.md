# Commands

| Command                       | Description                                                                                     | 3rd Party API      | Required permission |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | ------------------ | ------------------- |
| `/credits balance`            | Shows guild balance for yourself or specified member                                            | :x:                |                     |
| `/credits gift`               | Gifts from your money to another member in the guild                                            | :x:                |                     |
| `/credits top`                | Shows top ten in the guild                                                                      | :x:                |                     |
| `/credits work`               | You can work to earn credits between 0 - [credits.workRate](/docs/configuration/guild)          | :x:                |                     |
| `/admin counters add`         | Add a counter to guild                                                                          | :x:                | `MANAGE_GUILD`      |
| `/admin counters remove`      | Remove a counter from guild                                                                     | :x:                | `MANAGE_GUILD`      |
| `/admin credits give`         | Give credits to a member                                                                        | :x:                | `MANAGE_GUILD`      |
| `/admin credits set`          | Set credit amount of a member                                                                   | :x:                | `MANAGE_GUILD`      |
| `/admin credits take`         | Take credits from a member                                                                      | :x:                | `MANAGE_GUILD`      |
| `/admin credits transfer`     | Transfer credits from a member to another                                                       | :x:                | `MANAGE_GUILD`      |
| `/counters view`              | Check how many times a counter word has been sent                                               | :x:                |                     |
| `/profile view`               | Check your own or specific member's profile                                                     | :x:                |                     |
| `/reputation give`            | Give reputation to another member                                                               | :x:                |                     |
| `/settings guild credits`     | Configure `credits` parameters for the guild                                                    | :x:                | `MANAGE_GUILD`      |
| `/settings guild points`      | Configure `points` parameters for the guild                                                     | :x:                | `MANAGE_GUILD`      |
| `/settings guild pterodactyl` | Configure [controlpanel.gg](https://controlpanel.gg) parameters for the guild                   | :white_check_mark: | `MANAGE_GUILD`      |
| `/settings user appearance`   | Configure parameters for yourself in the guild                                                  | :x:                |                     |
| `/shop pterodactyl`           | Buy [controlpanel.gg](https://controlpanel.gg) credits from [credits](/docs/configuration/user) | :white_check_mark: |
| `/shop roles buy`             | Buy a role in the guild for [shop.roles.pricePerHour](/docs/configuration/guild)                | :x:                |
| `/shop roles cancel`          | Cancel a role you have bought in the guild                                                      | :x:                |
| `/utilities dns ipv4`         | Resolve IPv4s from a DNS query                                                                  | :x:                |
| `/utilities dns ipv6`         | Resolve IPv6s from a DNS query                                                                  | :x:                |
| `/utilities dns lookup`       | Lookup IPv4/IPv6 from a DNS query                                                               | :x:                |
| `/utilities dns mx`           | Resolve MX records from a DNS query                                                             | :x:                |
| `/utilities dns naptr`        | No information provided, feature isn't even tested                                              | :x:                |
| `/utilities dns ns`           | Resolve nameservers from a DNS query                                                            | :x:                |
| `/utilities dns ptr`          | Resolve domain names from a DNS query providing an IPv4/IPv6                                    | :x:                |
| `/utilities dns resolve`      | Resolve an IP from a DNS query                                                                  | :x:                |
| `/utilities dns reverse`      | Resolve domain names from a DNS query providing an IPv4/IPv6                                    | :x:                |
| `/utilities dns soa`          | Resolve SOA information from a DNS query                                                        | :x:                |
| `/utilities dns srv`          | No information provided, feature isn't even tested                                              | :x:                |
| `/utilities dns txt`          | Resolves txt records from a DNS query                                                           | :x:                |
| `/utilities about`            | Information about the bot                                                                       | :x:                |
| `/utilities stats`            | Statistics about the bot                                                                        | :x:                |
