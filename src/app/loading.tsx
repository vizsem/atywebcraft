export default function Loading() {
  return (
    <div className="container py-24 flex justify-center items-center min-h-[50vh]">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <p className="text-muted font-medium">Memuat...</p>
      </div>
    </div>
  );
}
