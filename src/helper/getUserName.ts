type nameType = {
  fullName: string;
  familyName: string;
  givenName: string;
};

/**
 * getUserName Function
 * @returns { nameType } fullName, familyName, givenName - User name
 */
function getUserName(): nameType {
  const user = Session.getActiveUser();
  const contact = ContactsApp.getContact(user.toString());
  // User name
  const fullName = contact.getFullName();
  const familyName = contact.getFamilyName();
  const givenName = contact.getGivenName();

  return { fullName, familyName, givenName };
}

export { getUserName };
