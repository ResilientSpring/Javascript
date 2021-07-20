import matplotlib.pyplot as plt
import numpy as np

def generate_time_series(batch_size, number_of_steps):
    frequency1, frequency2, offsets1, offsets2 = np.random.rand(4, batch_size, 1)
    time = np.linspace(0, 1, number_of_steps)

    series = 0.5 * np.sin((time - offsets1) * (frequency1 * 10 + 10))  # wave 1
    series += 0.2 * np.sin((time - offsets2) * (frequency2 * 20 + 20)) # + wave 2
    series += 0.1 * (np.random.rand(batch_size, number_of_steps) - 0.5) # + noise

    return series[..., np.newaxis].astype(np.float32)

number_of_steps = 50
series = generate_time_series(batch_size=10000, number_of_steps=number_of_steps + 1)

X_train, y_train = series[:7000, :number_of_steps], series[:7000, -1]
X_valid, y_valid = series[7000:9000, :number_of_steps], series[7000:9000, -1]
X_test, y_test = series[9000:, :number_of_steps], series[9000:, -1]

def plot_series(series, y=None, y_pred=None, x_label="$t$", y_label="$x(t)$"):
    plt.plot(series, ".-")
    if y is not None:
        plt.plot(number_of_steps, y, "bx", markersize=10)
    if y_pred is not None:
        plt.plot(number_of_steps, y_pred, "ro")
    plt.grid(True)
    if x_label:
        plt.xlabel(x_label, fontsize=16)
    if y_label:
        plt.ylabel(y_label, fontsize=16, rotation=0)
    plt.hlines(0, 0, 100, linewidth=1)
    plt.axis([0, number_of_steps + 1, -1, 1])


fig, axes = plt.subplots(nrows=1, ncols=2, sharey=True, figsize=(12, 4))

for col in range(2):
    plt.sca(axes[col])
    plot_series(X_valid[col, :, 0], y_valid[col, 0],
                y_label=("$x(t)$" if col == 0 else None))

plt.savefig("Book_cover.jpg")
plt.show()
