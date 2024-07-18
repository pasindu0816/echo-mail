const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
    <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f7f7f7;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td style="padding: 20px 0 30px 0;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse; background-color: #ffffff;">
                            <tr>
                                <td align="center" bgcolor="#26D4CB" style="padding: 40px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                                    I'd like your input!
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                <b>Please answer the following question:</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                ${survey.body}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 30px 0;">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td style="text-align: center;">
                                                            <a href="${keys.redirectDomain}/api/surveys/thanks" style="font-size: 18px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; background-color: #26D4CB; padding: 10px 20px; border-radius: 5px; display: inline-block;">Yes</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: center; padding-top: 10px;">
                                                            <a href="${keys.redirectDomain}/api/surveys/thanks" style="font-size: 18px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; background-color: #f44336; padding: 10px 20px; border-radius: 5px; display: inline-block;">No</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                Thank you for your time and feedback!
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#26D4CB" style="padding: 30px 30px 30px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                                &reg; Your Company 2024<br/>
                                                <a href="#" style="color: #ffffff;"><font color="#ffffff">Unsubscribe</font></a> to this newsletter instantly
                                            </td>
                                            <td align="right" width="25%">
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                            <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1024px-Twitter-logo.svg.png" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                                            </a>
                                                        </td>
                                                        <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                        <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                            <a href="http://www.facebook.com/" style="color: #ffffff;">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
    `;
};
