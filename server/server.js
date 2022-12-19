/**
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 18/12/2022 14:12
 * @File        : server.js
 * @IDE         : WebStorm
 */

const express = require('express')

const startText = (port) => { return `
==================================================
|                                                |
|   🚀 Server running at http://localhost:${port}/  |
|   🛑 Press Ctrl + C to stop                    |
|   🔥 Created with love by manho                |
|                                                |
==================================================
`};

/**
 * @Description : Create express app
 * @param port
 * @returns {express}
 */
function serveBackendAPI (port=3000){
    if (!port || port <1023) throw new Error('Invalid port number');
    const app = express();
    app.use(express.json());
    app.use(express.static('../dist'));

    app.get('/api/event', (req, res) => {
        res.status(200).json([
            {'date': '2021-12-18', 'title': 'Christmas', 'description': 'Christmas is an annual festival commemorating the birth of Jesus Christ, observed most commonly on December 25 as a religious and cultural celebration among billions of people around the world. A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night; in some traditions, Christmastide includes an Octave. Christmas Day is a public holiday in many of the world\'s nations, is celebrated culturally by a large number of non-Christian people, and is an integral part of the holiday season centered around it.'},
            {'date': '2021-12-25', 'title': 'Christmas', 'description': 'Christmas is an annual festival commemorating the birth of Jesus Christ, observed most commonly on December 25 as a religious and cultural celebration among billions of people around the world. A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night; in some traditions, Christmastide includes an Octave. Christmas Day is a public holiday in many of the world\'s nations, is celebrated culturally by a large number of non-Christian people, and is an integral part of the holiday season centered around it.'}

        ])
    })

    app.listen(port, () => {
        // clear console
        console.clear();
        console.log(startText(port));
    });
}

module.exports = serveBackendAPI;