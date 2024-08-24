const { httpRequest, setAccessToken } = require('../utils/httpRequest');

const fbController = {
    getInfo: async (req, res) => {
        try {
            const pageInfo = await httpRequest
                .get('/me', {
                    params: {
                        fields: 'id, name, picture',
                    },
                })
                .then((res) => res.data);

            const conversations = await httpRequest
                .get('/me/conversations', {
                    params: {
                        fields: 'id, participants',
                    },
                })
                .then((res) => res.data);

            const c = conversations.data.map((conversation) => {
                const p = conversation.participants.data.filter(
                    (participant) => participant.id !== pageInfo.id
                );
                return {id: conversation.id, participant: p[0]};
            });
            
            return res.render('components/home', { info: pageInfo, conversations: c});
        } catch (error) {
            console.error('Error fetching info from Facebook:', error);
            return res.render('components/error-page', { message: 'Failed to fetch info from Facebook' });
        }
    },

    getMessages: async (req, res) => {
        try {
            const conversationId = req.params.conversationId;

            // Gửi yêu cầu tới Facebook Graph API để lấy danh sách tin nhắn
            const messages = await httpRequest
                .get(`/${conversationId}/messages`, {
                    params: {
                        fields: 'message,from,created_time',
                    },
                })
                .then((res) => res.data);

            // Trả về danh sách tin nhắn dưới dạng JSON

            return res.json(messages.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
            return res.status(500).json({ error: 'Failed to fetch messages' });
        }
    },

    sendMessage: async (req, res) => {
        try {
            const body = req.body;
            
            const result = await httpRequest
                .post(`/me/messages`, body, {
                    
                })
                .then((res) => res.data);

            return res.json(result);
        } catch (error) {
            console.error('Error sending message:', error);
            return res.status(500).json({ error: 'Failed to send message' });
        }
    },
};

module.exports = fbController;
