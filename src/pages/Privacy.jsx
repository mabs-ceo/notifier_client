

function PrivacyNotice() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Privacy Notice</h2>
      <p className="text-gray-700 mb-4">
        We are committed to protecting your privacy. Here's how your information is handled:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Geolocation:</strong> We use your IP address to determine your approximate location. This is solely used to verify if you are accessing the site from Singapore.
        </li>
        <li>
          <strong>Notification Token:</strong> If you grant permission, we collect a notification token to send you relevant updates (e.g., Janazah notifications).
        </li>
        <li>
          <strong>Data Sharing:</strong> None of your information is shared with any third parties. Everything remains strictly confidential.
        </li>
      </ul>
      <p className="mt-4 text-gray-600 text-sm">
        Your trust means a lot to us. If you have any concerns, feel free to reach out.
      </p>
    </div>
  );
}

export default PrivacyNotice;
