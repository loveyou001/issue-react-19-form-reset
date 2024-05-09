function action(formData: FormData) {
  console.log("Submitted:", formData.get("message"));
}

export function App() {
  return (
    <main>
      <form action={action}>
        <label>
          <div>Message</div>
          <textarea name="message" />
        </label>

        <button type="submit">Save draft</button>
      </form>
    </main>
  );
}
