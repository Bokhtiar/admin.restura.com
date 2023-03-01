export const BradCrumbs: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="flex gap-1 items-center py-2 text-gray-600">
        <span className="material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">chevron_right</span>
        <span>Dashboard</span>
      </section>
    </>
  );
};
