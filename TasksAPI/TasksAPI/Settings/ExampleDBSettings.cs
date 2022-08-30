namespace TasksAPI.Settings
{
    public class ExampleDBSettings : IDatabaseSettings
    {
        public string DatabaseName { get; set; }
        public string Host { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string ConnectionString { get => $"mongodb+srv://{User}:{Password}@{Host}"; }
    }
}
