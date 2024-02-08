class ContactService{
    constructor(Contact){
        this.service = Contact;
    }

    async createContact({contact, UserId}){
        try {
            const contactData = await this.service.create({ contact, UserId});
            return contactData;
        } catch (error) {
            return error;
        }
    }
}

export default ContactService;
